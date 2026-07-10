interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
}

export default function Button({
  children,
  type="button"
}: ButtonProps) {

return (
<button
type={type}
className="
bg-blue-600
text-white
px-6
py-3
rounded-xl
font-semibold
hover:bg-blue-700
transition
"
>
{children}
</button>
);

}