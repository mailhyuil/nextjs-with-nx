'use client';
import { decrement, increment } from 'apps/client/redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from 'apps/client/redux/hooks';

export default function HomePage() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();
  return (
    <main className="flex flex-col items-center p-5">
      <h1 className="font-bold">Count!</h1>
      <p className="text-2xl font-bold">{count}</p>
      <button
        className="bg-gray-500 w-20 rounded-full border-black border-2 my-5"
        onClick={() => dispatch(increment())}
      >
        increase
      </button>
      <button
        className="bg-gray-500 w-20 rounded-full border-black border-2 my-5"
        onClick={() => dispatch(decrement())}
      >
        decrease
      </button>
    </main>
  );
}
