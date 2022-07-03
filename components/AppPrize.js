import React, { Component } from 'react';
import Image from 'next/image';

// custom function
function updateLocalStorage(data) {
    localStorage.setItem('name', JSON.stringify(data))
}

class AppPrize extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }

        this.inputHandler = this.inputHandler.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem('name')) {
            this.setState({ name: JSON.parse(localStorage.getItem('name')) })
        }
    }

    inputHandler(e) {
        this.setState({ name: e.target.value })
    }

    componentDidUpdate() {
        updateLocalStorage(this.state.name);
    }

    render() {
        return (

            <div id="AppPrize">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h2 className="prize_title"> {this.props.title}</h2>
                            <h2 className="prize_title small"> جوایز اهدایی</h2>

                            <ul>
                                {this.props.data.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <div className="prize_box">
                                                <span className="prize_num">{item.id}</span>

                                                <span className="prize_label">
                                                    {item.title}:
                                                </span>
                                                <p>
                                                    <span className="prize_gift">  {item.gift} عدد سکه </span>
                                                    <span className="prize_rest"> بهار آزادی</span>
                                                </p>

                                            </div>
                                        </li>
                                    )
                                })}
                                <li>
                                    <div className="prize_input">
                                        <input type="text" placeholder="نام خود را وارد کنید" onChange={this.inputHandler} />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-lg-6 prize_img-wrapper">
                            <span className="name_on_cup">{this.state.name}</span>
                            <div>
                                <Image layout="intrinsic" src="/images/prize.svg" width={566} height={453} alt="نفرات برتر" title="نفرات برتر" ></Image>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default AppPrize;