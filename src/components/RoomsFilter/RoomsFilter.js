import React from 'react';
import './RoomFilter.css';
import Title from '../Title/Title';
import {useSelector} from 'react-redux';

const RoomsFilter = ({optionsValue, onFilterChange}) => {
    const rooms = useSelector(state => state.rooms.rooms);
    const types = ['all', ...new Set(rooms.map(room => room.type))];
    const people = ['all', ...new Set(rooms.map(room => room.capacity))];

    console.log(optionsValue);
    const handleChange = e =>
        onFilterChange({
            ...optionsValue,
            [e.target.name]: e.target.type === 'checkbox' ?
                e.target.checked : e.target.value
        });

    return (
        <section className='filter-container'>
            <Title>search rooms</Title>
            <form className='filter-form'>
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select name='type'
                            value={optionsValue.type}
                            className='form-control'
                            onChange={handleChange}>
                        {types.map((type, index) => <option key={index} value={type}>{type}</option>)}
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='capacity'>Guests</label>
                    <select name='capacity'
                            value={optionsValue.capacity}
                            className='form-control'
                            onChange={handleChange}>
                        {people.map((person, index) => <option key={index} value={person}>{person}</option>)}
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor='price'>room price ${optionsValue.price}</label>
                    <input className='form-control'
                           type="range"
                           name='price'
                           min={optionsValue.minPrice}
                           max={optionsValue.maxPrice}
                           value={optionsValue.price}
                           step={50}
                           onChange={handleChange}/>
                </div>

                <div className='form-group'>
                    <label htmlFor='size'>room size</label>
                    <div className='size-inputs'>
                        <input type="number"
                               className='size-input'
                               name='minSize'
                               id='size'
                               value={optionsValue.minSize}
                               onChange={handleChange}/>
                        <input type="number"
                               className='size-input'
                               name='maxSize'
                               id='size'
                               value={optionsValue.maxSize}
                               onChange={handleChange}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox"
                               name="breakfast"
                               id='breakfast'
                               checked={optionsValue.breakfast}
                               onChange={handleChange}/>
                        <label htmlFor='breakfast'>Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox"
                               name="pets"
                               id='pets'
                               checked={optionsValue.pets}
                               onChange={handleChange}/>
                        <label htmlFor='pets'>Pets</label>
                    </div>
                </div>

            </form>
        </section>
    );
};

export default RoomsFilter;
