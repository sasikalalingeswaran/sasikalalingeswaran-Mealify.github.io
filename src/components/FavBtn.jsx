
const FavBtn = ({ meal, toggle, isFav }) => {
  return (
    <button onClick={(e) => {
        e.preventDefault(); 
        toggle(meal);
      }} className="fav-btn"
    >
      {isFav ? "❤️" : "🖤"}
    </button>
  );
};

export default FavBtn;