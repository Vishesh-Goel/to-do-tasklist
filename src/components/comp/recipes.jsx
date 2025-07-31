const recipes = [{
  id: 1,
  name: 'greek salad',
  ingredients: ['tomato', 'cucumber', 'onion', 'olives', 'feta']
},

{
  id: 2,
  name: 'hawaian pizza',
  ingredients: ['crust', 'sauce', 'mozerilla', 'ham', 'pineapple']
},

{
  id: 3,
  name: 'hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}]


const Recipelist = () => {
    return (
      <>
        {recipes.map(r => 
          <div key={r.id} >
            <h4>{r.name}</h4>
            <ol>
              {r.ingredients.map(i => 
                <li key={i}>{i}</li>
              )}
            </ol>
          </div>
        )}
      </>
    )
}

export default Recipelist