'use client';
import { decrement, increment } from 'apps/client/redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from 'apps/client/redux/hooks';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';
export default function HomePage() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();
  return (
    <main className="flex flex-col items-center p-5">
      <h1 className="font-bold">Count!</h1>
      <p className="text-2xl font-bold">{count}</p>
      <div className="flex gap-2">
        <button
          className="bg-gray-50 flex items-center gap-2  rounded-full border-gray-100 text-gray-700 font-semibold border-2 px-2 py-1"
          onClick={() => dispatch(increment())}
        >
          <FaArrowCircleUp className="text-blue-400" />
          increment
        </button>
        <button
          className="bg-gray-50 flex items-center gap-2  rounded-full border-gray-100 text-gray-700 font-semibold border-2 px-2 py-1"
          onClick={() => dispatch(decrement())}
        >
          <FaArrowCircleDown className="text-blue-400" />
          decrement
        </button>
      </div>
    </main>
  );
}
