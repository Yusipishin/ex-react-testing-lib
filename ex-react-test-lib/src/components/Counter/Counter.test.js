import Counter from "./Counter";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import {createReduxStore} from "../../store/store";
import {renderWithRedux} from "../../tests/helpers/renderWithRedux";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe('Counter test', () => {
    test('Test ', async () => {
        const {getByTestId} =
            renderTestApp(null, {
                route: "/",
                initialState: {
                    counter: { value: 10 }
                }
            })
        //getByTestId будет работать в области <Counter/>
        const incrementBtn = getByTestId('incr-btn')
        expect(getByTestId('value-title')).toHaveTextContent("10")
        userEvent.click(incrementBtn)
        expect(getByTestId('value-title')).toHaveTextContent("11")
    })
})