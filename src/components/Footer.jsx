import '/assets/css/footer.css';

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Miquel's Web S.A - Projecte portafoli</p>
      </div>
    </footer>
  );
}
