import { Leaf, Cherry, Nut } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-amber-50 text-brown-800 font-serif">
      <header className="bg-brown-700 text-amber-100 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Rustic Roots Farm</h1>
          <p className="text-lg">Family-grown chestnuts and berries</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Leaf className="mr-2" /> Our Story
          </h2>
          <p className="text-lg">
            Welcome to Rustic Roots Farm, where our family has been nurturing the land for generations. 
            Our passion for sustainable farming and love for nature shine through in every chestnut and berry we grow.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Cherry className="mr-2" /> Our Berries
          </h2>
          <p className="text-lg mb-4">
            Savor the sweetness of summer with our hand-picked berries. From juicy strawberries to plump blueberries, 
            each fruit is a testament to our commitment to quality.
          </p>
          <img src="/placeholder.svg" alt="Assorted berries" className="mx-auto object-cover w-full h-64 rounded-lg shadow-md" />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Nut className="mr-2" /> Our Chestnuts
          </h2>
          <p className="text-lg mb-4">
            Experience the rich, nutty flavor of our farm-fresh chestnuts. Perfect for roasting, baking, or as a hearty 
            addition to your favorite recipes.
          </p>
          <img src="/placeholder.svg" alt="Fresh chestnuts" className="mx-auto object-cover w-full h-64 rounded-lg shadow-md" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
          <p className="text-lg">
            Come experience the rustic charm of our farm. Open for visits and pick-your-own adventures 
            during harvest seasons. Check our social media for current hours and availability.
          </p>
        </section>
      </main>

      <footer className="bg-brown-700 text-amber-100 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Rustic Roots Farm. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
