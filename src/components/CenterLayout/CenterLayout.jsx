function CenterLayout({ children, className }) {
  return (
    <div className={`max-w-[75rem] mx-auto ${className || ''}`}>{children}</div>
  );
}

export default CenterLayout;
