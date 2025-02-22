export default function Loading() {
  return (
    <div className="h-1 w-full bg-orange-100 fixed top-[125px] left-0">
      <div className="h-1 bg-orange-500 w-full animate-[loading_1s_ease-in-out_infinite]"></div>
    </div>
  );
} 