import { useState } from 'react';
import '../style.css';

function SearchBar({ schools, onFilterChange }) {
    const [name, setName] = useState('');
    const [schoolId, setSchoolId] = useState('');

    // Обработчик изменений для инпута имени
    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
        onFilterChange(newName, schoolId); // Обновляем фильтрацию
    };

    // Обработчик изменений для выбора школы
    const handleSchoolChange = (event) => {
        const newSchoolId = event.target.value;
        setSchoolId(newSchoolId);

        // Если выбран первый элемент "Choose one", сбрасываем фильтр по школе
        if (newSchoolId === '') {
            onFilterChange(name, ''); // Сбрасываем фильтрацию по школе
        } else {
            onFilterChange(name, newSchoolId); // Применяем фильтрацию по выбранной школе
        }
    };

    return (
        <div className="header-input">
            <label htmlFor="input-name">
                Name
                <input
                    className="name-input"
                    name="input-name"
                    type="text"
                    placeholder="Hermione"
                    value={name}
                    onChange={handleNameChange}
                />
            </label>

            <label htmlFor="input-school">
                School
                <select
                    name="input-school"
                    className="name-school"
                    id="input-school"
                    value={schoolId}
                    onChange={handleSchoolChange}
                >
                    <option value="">Choose one</option> {/* Если это выбран первый вариант, сбросить фильтрацию */}
                    {schools &&
                        schools.map((school) => {
                            return (
                                <option key={school.id} value={school.id}>
                                    {school.name}
                                </option>
                            );
                        })}
                </select>
            </label>
        </div>
    );
}

export default SearchBar;
