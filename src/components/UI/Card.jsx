function Card({ children, className }) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-md ${className}`}>
      {children}
    </div>
  );
}

export default Card;
