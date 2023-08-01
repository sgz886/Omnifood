function SubHeading({ children, className }) {
  return (
    <div
      className={`mb-4
                  text-base font-medium text-main-shade uppercase tracking-wider
                  ${className}`}
    >
      {children}
    </div>
  );
}

export default SubHeading;
