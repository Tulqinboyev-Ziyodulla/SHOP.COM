import { useParams } from 'react-router-dom';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Rating } from '@mui/material';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/cartSlice';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

interface Product {
  id: string;
  title: string;
  price: number;
  desc: string;
  star: number;
  urls: string[];
}

interface Comment {
  id: string;
  author: string;
  star: number;
  text: string;
  createdAt: string;
}

const fetchProductById = async (id: string): Promise<Product> => {
  const response = await axios.get(`https://6788ff202c874e66b7d73080.mockapi.io/api/v1/products/${id}`);
  return response.data;
};

const fetchComments = async (id: string): Promise<Comment[]> => {
  const response = await axios.get(`https://6788ff202c874e66b7d73080.mockapi.io/api/v1/products/${id}/comments`);
  return response.data;
};

const postComment = async ({ id, comment }: { id: string; comment: Omit<Comment, 'id'> }): Promise<Comment> => {
  const response = await axios.post(`https://6788ff202c874e66b7d73080.mockapi.io/api/v1/products/${id}/comments`, comment);
  return response.data;
};

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const { data: products } = useQuery({
    queryKey: ['products', id],
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
  });

  const { data: comments } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => fetchComments(id!),
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      toast.success('Comment added successfully');
      queryClient.invalidateQueries({ queryKey: ['comments', id!] });
    },
  });

  const [quantity, setQuantity] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [commentData, setCommentData] = useState({ author: '', text: '', star: 0 });
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    if (!products) return;

    const cartItem = {
      id: products.id,
      title: products.title,
      price: products.price,
      desc: products.desc,
      quantity,
      image: products.urls[0],
    };
    dispatch(addToCart(cartItem));
    toast.success('Product added to cart successfully');
  };

  const handleAddComment = () => {
    if (!id) return;
    mutation.mutate({ id, comment: { ...commentData, createdAt: new Date().toISOString() } });
    setCommentData({ author: '', text: '', star: 0 });
    setIsModalOpen(false);
  };

  return (
    <section className="container mx-auto p-6 mt-10">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="w-full md:w-[400px] h-[400px] mb-4">
            <img
              src="https://assets.vogue.com/photos/5891e0ebb482c0ea0e4db2a8/4:3/w_2560%2Cc_limit/02-lestrange.jpg"
              alt={products?.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-[28px] md:text-[36px] font-semibold text-gray-800">{products?.title}</h1>
          <Rating value={products?.star} readOnly precision={0.5} className="text-yellow-500" />
          <p className="text-[20px] md:text-[24px] font-bold text-gray-900">{products?.price} сум</p>
          <p className="text-gray-600 text-base">{products?.desc}</p>
          <div className="flex justify-start gap-6 items-center">
            <div className="flex items-center gap-4">
              <button
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className="w-[300px] bg-black text-white px-6 py-3 rounded-3xl mt-4 hover:bg-black transition-all"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] md:text-[24px] font-bold text-gray-800">Comments</h2>
          <button
            className="bg-black text-white px-6 py-3 rounded-3xl mt-4 hover:bg-gray-900"
            onClick={() => setIsModalOpen(true)}
          >
            Write a Review
          </button>
        </div>
        <ul className="mt-4 p-4 flex flex-col gap-4">
          {comments?.map((comment: Comment) => (
            <li key={comment.id} className="border-b py-4">
              <Rating value={comment.star} readOnly precision={0.5} className="text-yellow-500" />
              <h3 className="font-bold text-lg text-gray-800">{comment.author}</h3>
              <p className="text-gray-600">{comment.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div className="bg-white rounded-lg shadow-xl w-[900px] h-[450px] max-w-lg mx-4">
          <DialogTitle className="text-2xl font-semibold text-gray-900 border-b border-gray-200 py-4 px-6">
            Write a Review
          </DialogTitle>
          <DialogContent className="px-6 py-4 space-y-6">
            <TextField
              label="Name"
              value={commentData.author}
              onChange={(e) =>
                setCommentData((prev) => ({ ...prev, author: e.target.value }))
              }
              fullWidth
              InputLabelProps={{ className: 'text-gray-500' }}
              className="border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none px-4 py-3"
            />
            <TextField
              label="Comment"
              multiline
              rows={4}
              value={commentData.text}
              onChange={(e) =>
                setCommentData((prev) => ({ ...prev, text: e.target.value }))
              }
              fullWidth
              InputLabelProps={{ className: 'text-gray-500' }}
              className="border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none px-4 py-3"
            />
            <div>
              <p className="text-sm text-gray-600">Rating</p>
              <Rating
                value={commentData.star}
                onChange={(_, value) => setCommentData((prev) => ({ ...prev, star: value || 0 }))}
                precision={0.5}
                className="text-yellow-500"
              />
            </div>
          </DialogContent>
          <DialogActions className="border-t border-gray-200 py-4 px-6 space-x-4">
            <Button
              onClick={() => setIsModalOpen(false)}
              className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddComment}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg transition"
            >
              Add
            </Button>
          </DialogActions>
        </div>
      </Dialog>

    </section>
  );
};

export default Detail;