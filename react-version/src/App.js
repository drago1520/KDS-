import './App.css';


function App() {
  window.addEventListener('touchmove', function(event) {
    event.preventDefault();
  }, { passive: false });
  // Disable scrolling
  function noScroll() {
    window.scrollTo(0, 0);
  }

  // Add listener to disable scroll
  window.addEventListener('scroll', noScroll);
  return (
    <></>

  );
}

export default App;
