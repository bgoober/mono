export default function Spinner() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-20 w-20 animate-spin rounded-full border-b-2 border-t-2 border-primary" />
    </div>
  );
}
