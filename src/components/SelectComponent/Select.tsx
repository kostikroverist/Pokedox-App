import { FC } from "react";
import { POKEMON_TYPES } from "../../Constants/url";


type Select = {
    selectType: (selectedType: string) => void;
}


const Select: FC<Select> = ({ selectType }) => {
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedType = event.target.value;
        selectType(selectedType);
    };

    return (
        <select onChange={handleSelectChange} className="mx-auto w-52  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" style={{ backgroundColor: 'black' }}>All Types</option>
            {POKEMON_TYPES.map((type, index) => (
                <option key={index} value={type.name} style={{ backgroundColor: type.color, color: 'white' }}>
                    {type.name}
                </option>
            ))}
        </select>
    );
}

export default Select
