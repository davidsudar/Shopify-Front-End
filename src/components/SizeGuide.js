const sizing = [
    { Size: "XS", Chest: "82", Waist: "64", Hip: "/sizing", Length: "/sizing"},
    { Size: "S", Chest: "/sizing", Waist: "/sizing", Hip: "/sizing", Length: "/sizing"},
    { Size: "M", Chest: "/sizing", Waist: "/sizing", Hip: "/sizing", Length: "/sizing"},
    { Size: "L", Chest: "/sizing", Waist: "/sizing", Hip: "/sizing", Length: "/sizing"},
    { Size: "XL", Chest: "/sizing", Waist: "/sizing", Hip: "/sizing", Length: "/sizing"},
  ];

const SizeGuide = () => (

    

<div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Size
                </th>
                <th scope="col" class="py-3 px-6">
                    Chest(cm)
                </th>
                <th scope="col" class="py-3 px-6">
                    Waist
                </th>
                <th scope="col" class="py-3 px-6">
                    Hip
                </th>
                <th scope="col" class="py-3 px-6">
                    Length
                </th>
            </tr>
        </thead>
        <tbody>
        {sizing.map((item) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.Size}
                </th>
                <td class="py-4 px-6">
                {item.Chest}
                </td>
                <td class="py-4 px-6">
                {item.Waist}
                </td>
                <td class="py-4 px-6">
                    ${item.Hip}
                </td>
                <td class="py-4 px-6">
                    ${item.Length}
                </td>
            </tr>
        ))}
            
            {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="py-4 px-6">
                    White
                </td>
                <td class="py-4 px-6">
                    Laptop PC
                </td>
                <td class="py-4 px-6">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="py-4 px-6">
                    Black
                </td>
                <td class="py-4 px-6">
                    Accessories
                </td>
                <td class="py-4 px-6">
                    $99
                </td>
            </tr> */}
        </tbody>
    </table>
</div>
);

export default SizeGuide;