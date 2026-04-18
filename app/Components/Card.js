
export default function Card({ width, height, children }) {
  return (
    <div
      className={`${width} ${height} flex flex-col p-3
      rounded-lg border

       border-black 
       justify-around
       overflow-hidden`}
    >
      {children}
    </div>
  );
}
