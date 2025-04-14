import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

// Define a type for the variable item
interface VariableItem {
    name: string;
    selected: boolean;
}

// Define the type for categories of variables
export interface VariableState {
    category1: VariableItem[];
    category2: VariableItem[];
    category3: VariableItem[];
}

const initialState: VariableState = {
    category1: [
        { name: 'Carbon', selected: false },
        { name: 'CO2 Distribution', selected: true },
        { name: 'Fleet sizing', selected: true },
    ],
    category2: [
        { name: 'Parking Rate', selected: false },
        { name: 'Barrier Rule', selected: true },
        { name: 'Request rate', selected: true },
        { name: 'Variable 1', selected: false },
        { name: 'Variable 2', selected: false },
        { name: 'Variable 3', selected: false },
    ],
    category3: [
        { name: 'Variable 1', selected: false },
        { name: 'Variable 2', selected: true },
        { name: 'Variable 3', selected: true },
    ],
};

// Create a slice
export const variablesSlice = createSlice({
    name: 'variables',
    initialState,
    reducers: {
        toggleVariableSelection: (
            state,
            action: PayloadAction<{ category: keyof VariableState; name: string }>,
        ) => {
            const { category, name } = action.payload;
            const item = state[category].find((item) => item.name === name);
            if (item) {
                item.selected = !item.selected;
            }
        },
        resetAllVariables: (state) => {
            Object.keys(state).forEach((category) => {
                const typedCategory = category as keyof VariableState;
                state[typedCategory] = state[typedCategory].map((item) => ({
                    ...item,
                    selected: false,
                }));
            });
        },
    },
});

export const { toggleVariableSelection, resetAllVariables } = variablesSlice.actions;

// Selectors
export const selectVariables = (state: RootState) => state.variables;
export const selectCategoryVariables = (state: RootState, category: keyof VariableState) =>
    (state.variables as VariableState)[category];

export default variablesSlice.reducer;
