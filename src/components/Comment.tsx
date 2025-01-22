import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Rating } from "@mui/material";

type Comment = {
  id: string;
  author: string;
  text: string;
  star: number;
};

const fetchComments = async (): Promise<Comment[]> => {
  const response = await axios.get(
    "https://6787c574c4a42c9161082cce.mockapi.io/comments"
  );
  return response.data;
};

const Comments: React.FC = () => {
  const { data: comments, isError, isLoading, error } = useQuery<Comment[]>({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });

  if (isLoading) {
    return (
      <div className="text-center text-gray-500">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Failed to fetch comments: {(error as Error)?.message || "Unknown error"}
      </div>
    );
  }

  const fiveStarComments = comments?.filter((comment) => comment.star === 5);
  const limitedComments = fiveStarComments?.slice(0, 6);

  if (!limitedComments || limitedComments.length === 0) {
    return (
      <div className="text-center text-gray-700">
        No five-star comments available.
      </div>
    );
  }

  return (
    <section className="container mb-20 mt-20 px-4 md:px-8 lg:px-16">
      <div>
        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 text-center text-gray-900">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {limitedComments.map((comment) => (
            <div
              key={comment.id}
              className="border p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-semibold text-lg text-black">
                  {comment.author}
                </span>
              </div>
              <Rating
                name={`rating-${comment.id}`}
                value={comment.star}
                precision={0.5}
                readOnly
                className="mb-4"
              />
              <p className="text-base text-gray-600">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments;
