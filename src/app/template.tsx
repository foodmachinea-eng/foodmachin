/** Soft fade between pages (disabled automatically for reduced-motion users). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-fade-in">{children}</div>;
}
