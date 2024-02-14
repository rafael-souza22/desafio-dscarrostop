import Card from "../../components/Card";
import Header from "../../components/Header";
import Comments from "../../components/Comments";
import Footer from "../../components/Footer";

export default function Car() {
  return (
    <>
      <Header />
      <main>
        <section id="ct-cards-section">
          <h2 className="ct-cards-title">Venha nos visitar</h2>
          <div className="ct-cards-container">
            <Card />
            <Card />
          </div>
        </section>
        <section id="ct-comments-section">
          <h2>O que estão dizendo</h2>
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
