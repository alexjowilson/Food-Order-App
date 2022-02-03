import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Tres Diablos Sushi Roll',
      description: 'spicy tuna, cucumber, cilantro, topped w/ tuna, salmon, yellowtail, tobiko, scallion, drizzled w/ strawberry habanero sauce',
      price: 22.00,
    },
    {
      id: 'm2',
      name: 'Pho Tai Nam',
      description: '24 hours beef broth, Painted Hill Farms eye of round steak and beef brisket, rice noodles, green onion, bean sprout, basil, lime, hoisin, and Sriracha hot sauce.',
      price: 17.90,
    },
    {
      id: 'm3',
      name: 'Combo Vermicelli Noodles',
      description: 'Grilled Draper Valley chicken thigh, shrimp, house-made beef & pork sausage, crispy imperial roll, rice vermicelli noodles, lettuce, bean sprout, cucumber, pickles, fresh herbs, roasted peanut, crispy shallot, and nuoc cham.',
      price: 21.00,
    },
    {
      id: 'm4',
      name: 'Carne Asada',
      description: 'Grilled steak marinated with our secret seasoning, and served with rice, beans, guacamole, onion, and your choice of flour or corn tortillas',
      price: 13.99,
    },
  ];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => 
    <MealItem 
      id={meal.id}
      key={meal.id} 
      name={meal.name} 
      price={meal.price} 
      description={meal.description}/>
    );

    return(
        <section className={classes.meals}>
            <Card>
              <ul>
                  {mealsList}
              </ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;