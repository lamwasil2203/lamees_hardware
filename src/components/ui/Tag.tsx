interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <span className="text-[0.8rem] py-1.5 px-4 bg-border rounded-[20px] tracking-[0.5px] font-medium">
      {label}
    </span>
  );
}
