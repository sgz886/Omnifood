function CenterLayout({ children, additionalClass }) {
  return (
    <div className={`max-w-[75rem] mx-auto ${additionalClass}`}>{children}</div>
  );
}

export default CenterLayout;
