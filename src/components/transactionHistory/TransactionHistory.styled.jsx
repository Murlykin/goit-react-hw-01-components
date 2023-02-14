import styled from '@emotion/styled';

export const TransactionHistor = styled.table`
    margin: 20px auto;
    border-radius: 4px;
    border: 1px solid #f0f1f0;
    `;

export const TransactionProperty = styled.thead`
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 700;
    font-size: 24px;
    text-transform: uppercase;
    color: dimgray;
    background-color: #f5faf7;
`;

export const TypeAmoundCurrency = styled.th`
    border-right: 1px solid f5faf7;
    border-bottom: 1px solid f5faf7;
}
`;

export const DataTypeAmoundCurrency = styled.tr`
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: dimgray;
    background-color: #f0eeee;
    border-bottom: 1px solid f5faf7;
    border-right: 1px solid f5faf7;
    // padding: 10px 50px;
`;

export const DataType = styled.td`
    text-transform: capitalize;
    padding: 10px 50px;
`;

export const AmoundCurrency = styled.td`
    padding: 10px 50px;
`;