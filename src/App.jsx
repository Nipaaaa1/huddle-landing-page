import SocialMedia from "./components/SocialMedia";

const App = () => {
  return (
    <main className="flex h-svh w-full flex-col bg-desktop bg-cover bg-no-repeat">
      <nav>
        <img src="/images/logo.svg" alt="Huddle Logo" />
      </nav>
      <section>
        <img
          src="/images/illustration-mockups.svg"
          alt="Illustration Mockups"
        />
        <div>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <a href="#">
            <button>register</button>
          </a>
        </div>
      </section>
      <footer>
        <SocialMedia />
      </footer>
    </main>
  );
};

export default App;
