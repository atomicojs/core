import { expect } from "@esm-bundle/chai";
import { setPrototype } from "../../element/set-prototype";

describe("internal: setPrototype", () => {
    it("declare basic", () => {
        class MyElement extends HTMLElement {}
        /**
         * @type {Object<string,string>}
         */
        const attrs = {};
        const values = {};

        setPrototype(MyElement.prototype, "value", Number, attrs, values);

        expect(attrs).to.deep.equal({ value: { prop: "value", type: Number } });
    });

    it("declare shema", () => {
        class MyElement extends HTMLElement {}
        /**
         * @type {Object<string,string>}
         */
        const attrs = {};
        const values = {};

        setPrototype(
            MyElement.prototype,
            "value",
            {
                type: Number,
                value: 1000,
            },
            attrs,
            values
        );

        expect(attrs).to.deep.equal({ value: { type: Number, prop: "value" } });
        expect(values).to.deep.equal({ value: 1000 });
    });
});
