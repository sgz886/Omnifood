function Section({ children, className }) {
  return <section className={`px-8 py-24 ${className || ''}`}>{children}</section>;
}

export default Section;
