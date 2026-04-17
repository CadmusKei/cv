
export default function Card({ width, height, children }) {
  return (
    <div
      className={`${width} ${height} flex flex-col p-3.5
      rounded-lg border
      space-y-1
       border-black 
       overflow-hidden`}
    >
      {children}
    </div>
  );
}
