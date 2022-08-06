import React, { Component } from "react";

class VariantSelector extends Component {
  render() {
    


    
    if (this.props.option.values[0].value === "Default Title") {
      return <div></div>;
    }
    return (
      <div>
        {this.props.option.values.map((value) => {
          let color = value.value;
          if (color === "Black") {
            color = "bg-black";
          } else if (color === "Brown") {
            color = "bg-[#a18072]";
          } else if (color === "Light Brown") {
            color = "bg-blue-600";
          } else {
            color = "bg-blue-600";
          }
          return (
            <li
              key={`${this.props.option.name}-${value}`}
              className={"w-4 h-4 rounded-full border border-black border-opacity-10 " + color}
            >
              <span className="sr-only">{color}</span>
            </li>
          );
        })}
      </div>
    );
  }
}

export default VariantSelector;
