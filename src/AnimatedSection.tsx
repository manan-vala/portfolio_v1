import { ArrowRight } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";

function Section() {
  return (
    <div className="w-full min-h-[50vh] py-10 flex flex-col items-center justify-center gap-6">
      <h4 className="font-instrument text-center italic text-white text-4xl">
        Work Gallery
      </h4>
      <div className="section-cards w-full h-[70vh]">
        <ScrollStack>
          <ScrollStackItem>
            <div className="card text-white bg-[#222] border-1 border-gray-500 px-3 pt-5 pb-3 rounded-lg">
              <p className="text-2xl font-inter-tight">Landing Page</p>
              <p className="text-2xl font-inter-tight">Balies</p>
              <div className="card-img bg-white rounded-md h-50 mt-4"></div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div className="card text-white bg-[#222] border-1 border-gray-500 px-3 pt-5 pb-3 rounded-lg">
              <p className="text-2xl font-inter-tight">Landing Page</p>
              <p className="text-2xl font-inter-tight">Balies</p>
              <div className="card-img bg-white rounded-md h-50 mt-4"></div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div className="card text-white bg-[#222] border-1 border-gray-500 px-3 pt-5 pb-3 rounded-lg">
              <p className="text-2xl font-inter-tight">Landing Page</p>
              <p className="text-2xl font-inter-tight">Balies</p>
              <div className="card-img bg-white rounded-md h-50 mt-4"></div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>

      <button className="flex px-4 py-3 gap-2 items-center justify-between text-2xl text-center text-white font-montserrat font-medium bg-purple-600  shadow-lg shadow-purple-600/60 p-2 rounded-full ">
        Explore More
        <div className="p-1 bg-white rounded-full">
          <ArrowRight color="#000" />
        </div>
      </button>
    </div>
  );
}

export default Section;
