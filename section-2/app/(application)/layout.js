export default function RootLayout({ children }) {
  return (
    <>
      <header style={{ background: "pink" }}>Header Application</header>
      {children}
      <footer style={{ background: "green" }}>Footer Application</footer>
    </>
  );
}
