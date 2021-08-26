import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="Привет привет привет" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Привет привет привет");
    });

    test("component should be consists span", () => {
        const component = create(<ProfileStatus status="Привет привет привет" />);
        const root = component.root;
        const span = root.findByType('span')
        expect(span).not.toBeNull();
    });

    test("component shouldn't be consists input", () => {
        const component = create(<ProfileStatus status="Привет привет привет" />);
        const root = component.root;
        expect(() => { root.findByType('input') }).toThrow();
    });

    test("component should be consists span with value", () => {
        const component = create(<ProfileStatus status="Привет привет привет" />);
        const root = component.root;
        const span = root.findByType('span')
        expect(span.children[0]).toBe("Привет привет привет");
    });

    test("input should be displayed instead of span", () => {
        const component = create(<ProfileStatus status="Привет привет привет" />);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.legth).not.toBeNull();
    });
});