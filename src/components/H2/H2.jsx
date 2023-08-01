function H2({ children, className }) {
  return (
    <h2
      className={`font-bold text-grey-normal tracking-tight text-[2.75rem]
                  ${className}`}
    >
      {children}
    </h2>
  );
}

export default H2;
