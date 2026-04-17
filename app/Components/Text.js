
export default function Text({children, className}) {
    return (
        <p className={`font-serif text-xs text-black ${className}`} >{children}</p>
    );
}