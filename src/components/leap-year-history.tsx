import React from "react";

export const LeapYearHistory = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
      <h2 className="text-2xl font-bold mb-4">The History of Leap Years</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-yellow-500 mb-2">Ancient Origins</h3>
          <p className="text-gray-300">
            The concept of leap years dates back to ancient Egypt. Around 238 BCE, 
            Ptolemy III Euergetes tried to add an extra day every four years. 
            However, the Egyptian priests resisted this change, and it wasn&apos;t 
            widely implemented.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-yellow-500 mb-2">Julian Calendar</h3>
          <p className="text-gray-300">
            In 45 BCE, Julius Caesar implemented the Julian calendar with the help of 
            the astronomer Sosigenes. This calendar introduced a leap day every four 
            years without exception, which was an improvement but still not perfect.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-yellow-500 mb-2">Gregorian Reform</h3>
          <p className="text-gray-300">
            By the 16th century, the Julian calendar had drifted about 10 days from the 
            solar year. In 1582, Pope Gregory XIII introduced the Gregorian calendar, 
            which we still use today. It refined the leap year rule: years divisible by 
            4 are leap years, except for century years (divisible by 100) which must also 
            be divisible by 400 to be leap years.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-yellow-500 mb-2">Adoption Timeline</h3>
          <p className="text-gray-300">
            The Gregorian calendar wasn&apos;t adopted simultaneously worldwide. Catholic 
            countries adopted it first in 1582. Protestant regions followed later, with 
            Great Britain and its colonies (including what would become the United States) 
            not adopting it until 1752. Some countries didn&apos;t adopt it until the 20th 
            century — Russia in 1918 and Greece in 1923.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-yellow-500 mb-2">Modern Accuracy</h3>
          <p className="text-gray-300">
            The Gregorian calendar&apos;s leap year system creates a mean year of 365.2425 days, 
            which is very close to the actual solar year of approximately 365.2422 days. 
            This means it will take about 3,300 years before the Gregorian calendar is 
            off by a full day.
          </p>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Fun Leap Year Facts</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Leap year babies (born on February 29) are sometimes called &quot;leaplings&quot;</li>
          <li>The Olympic Games and US Presidential elections occur in leap years</li>
          <li>According to Irish tradition, women can propose to men on leap day</li>
          <li>The chance of being born on February 29 is about 1 in 1,461</li>
          <li>People born on leap day celebrate their birthdays on either February 28 or March 1 in non-leap years</li>
        </ul>
      </div>
    </div>
  );
};
