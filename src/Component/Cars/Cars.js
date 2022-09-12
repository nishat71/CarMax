import React, { useState, useEffect } from 'react';
import Car from '../Car/Car';
import "./Cars.css"

const Cars = () => {
    const [cars, setCars] = useState();
    const [filterData, setFilterData] = useState();
    const [filteredCar, setFilteredCar] = useState({
        name: "",
        priceFrom: 0,
        priceTo: 0,
        fuel: ""
    });
    const [name, setName] = useState("")
    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(0)
    const [fuel, setFuel] = useState("")
    useEffect(() => {
        fetch('http://localhost:8000/addCar')
            .then(res => res.json())
            .then(data => {
                setCars(data)
                setFilterData(data)
            })
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(name !== ''){
            let data = cars.filter(car => car.title.toLowerCase().includes(name.toLowerCase())); 
            setFilterData(data)
        }
        else if(fuel !== ''){
            let data = cars.filter(car => car.fuel.toLowerCase().includes(fuel.toLowerCase()));
            setFilterData(data)
        }
        else if(priceFrom !== '' && priceTo !== ''){
            let data = cars.filter(car => parseInt(priceFrom) <= parseInt(car.price) && parseInt(priceTo) >= parseInt(car.price));
            setFilterData(data)
            
        }
        else if(fuel !== '' && name !== ''){
            let data = cars.filter(car => car.title.toLowerCase().includes(name.toLowerCase()) && car.fuel.toLowerCase().includes(fuel.toLowerCase())); 
            setFilterData(data)
            
        }
        else if(fuel !== '' && priceFrom !== '' && priceTo !== ''){
            let data = cars.filter(car => parseInt(priceFrom) <= parseInt(car.price) && parseInt(priceTo) >= parseInt(car.price) && car.fuel.toLowerCase().includes(fuel.toLowerCase()));
            setFilterData(data)
            
        }
        else if(name !== '' && priceFrom !== '' && priceTo !== ''){
            let data = cars.filter(car => parseInt(priceFrom) <= parseInt(car.price) && parseInt(priceTo) >= parseInt(car.price) && car.title.toLowerCase().includes(name.toLowerCase()));
            setFilterData(data)
        
        }
        else {
            let data = cars.filter(car => car.title.toLowerCase().includes(name.toLowerCase()) && car.fuel.toLowerCase().includes(fuel.toLowerCase()) && parseInt(priceFrom) <= parseInt(car.price) && parseInt(priceTo) >= parseInt(car.price));
        setFilterData(data);
        }
    }
    console.log(filterData)

    return (
        <div className="car-area">
            <div className='car'>
                <h4 className='text-center pweight'>Popular Cars</h4>
                <h2 className='text-center text-dark h1weight'>Most <span className='text-danger'>Popular</span> Cars<br /> In Our Shop</h2>
                <div className="car-search shadow">
                    <h5 className='text-center fs-4 text-light'>Find Car</h5>

                    <form onSubmit={handleSubmit}>
                        <div className="form-contain row">

                            <div className="col-xl-6 col-md-6 col-sm-6 my-1 bg car-input">
                                <input type="text" name="name" className='form-control' placeholder='Your Brand Name Here' onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-6 my-1 bg">
                                <select className='p-1 form-select text-secondary' name="fuel" id="" onChange={e => setFuel(e.target.value)}>
                                    <option value="">Fuel Type</option>
                                    <option value="petrol">petrol</option>
                                    <option value="diesel">diesel</option>
                                    <option value="cng">cng</option>
                                    <option value="cng">cng</option>
                                </select>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-6 my-1 car-input ">
                            <input type="text" name="priceFrom" id="" className='p-1 form-control' placeholder='Search by Price From' onChange={e => setPriceFrom(e.target.value)}/>
                                {/* <select className='p-1 form-select' name="priceFrom" id="" onChange={e => setPriceFrom(e.target.value)}>
                                    <option value="">Search by Price from</option>
                                    <option value="50000">50000</option>
                                    <option value="100000">100000</option>
                                    <option value="1500000">1500000</option>
                                </select> */}
                                {/* <input type="text" className='my-1 form-control' placeholder="Search by Price from" onChange={e=> setPriceFrom(e.target.value)}/> */}
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-6 my-1 car-input">
                            <input type="text" name="priceTo" id="" className='p-1 form-control' placeholder='Search by Price To' onChange={e => setPriceTo(e.target.value)} />
                                {/* <select className='p-1 form-select' name="priceTo" id="" onChange={e => setPriceTo(e.target.value)}>
                                    <option value="">Search by Price To</option>
                                    <option value="99999">99999</option>
                                    <option value="1499999">1499999</option>
                                    <option value="2000000">2000000</option>
                                    <option value="5000000">5000000</option>
                                </select> */}
                                {/* <input type="text"  className='my-1 form-control' placeholder="Search by Price to" onChange={e=> setPriceTo(e.target.value)}/> */}
                            </div>
                            <div className="col-xl-12 my-4 text-center">
                                <input type="submit" className='rounded' value="Find Car" />
                            </div>
                        </div>
                    </form>

                </div>
                <div className='car-box'>
                    {
                        filterData?.map(item => <Car key={item.id} demo={item} />)

                    }
                </div>
            </div>

        </div>


    );
};

export default Cars;