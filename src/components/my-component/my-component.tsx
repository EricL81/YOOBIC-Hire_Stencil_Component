import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() actors: any[];

  render() {
    return (
      <ul>
        {this.actors.map(actor => (
          <li>
            {Object.entries(actor).map(([key, value]) => (
              <div>
                <span>{key}:</span> {value}
              </div>
            ))}
          </li>
        ))}
      </ul>
    );
  }
}
