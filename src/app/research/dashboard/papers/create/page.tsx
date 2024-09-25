import H3 from "~/_components/final/H3";
import CreatePaperForm from "~/_components/final/Paper/PaperCreateForm";

export default function CreatePaperPage() {
  return (
    <>
      <H3 className="my-6 text-center font-semibold text-zinc-700">
        Create a new paper
      </H3>
      <CreatePaperForm />
    </>
  );
}
