"use client";

export interface titleProps {
  title: string;
}

const SectionTitle = ({ title }: titleProps) => {
  return (
    <h1 className="text-center font-bold text-4xl">
      {title}
      <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded" />
    </h1>
  );
};

export default SectionTitle;
