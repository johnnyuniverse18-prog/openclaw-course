export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        
        <div>
          <strong>Operator One</strong>

          <p style={{ opacity: 0.6, marginTop: 8 }}>
            Build AI that actually works.
          </p>
        </div>

        <p style={{ opacity: 0.5 }}>
          © {new Date().getFullYear()} Operator One
        </p>

      </div>
    </footer>
  );
}