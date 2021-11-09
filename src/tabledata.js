import { Input } from 'rsuite';
import React from 'react';
import './App.css';

//netUtility y fixed Asset
function TableData() {
    const backgroundTitles = { backgroundColor: '#AEB6BF' };
    const backgroundd = { backgroundColor: '#D7DBDD' };

    const [personalExpensesAno1, setPersonalExpensesAno1] = React.useState('')
    const [personalExpensesAno2, setPersonalExpensesAno2] = React.useState('')
    const [personalExpensesAno3, setPersonalExpensesAno3] = React.useState('')
    const [personalExpensesAno4, setPersonalExpensesAno4] = React.useState('')
    const [personalExpensesAno5, setPersonalExpensesAno5] = React.useState('')

    const [financialExpensesAno1, setFinancialExpensesAno1] = React.useState('')
    const [financialExpensesAno2, setFinancialExpensesAno2] = React.useState('')
    const [financialExpensesAno3, setFinancialExpensesAno3] = React.useState('')
    const [financialExpensesAno4, setFinancialExpensesAno4] = React.useState('')
    const [financialExpensesAno5, setFinancialExpensesAno5] = React.useState('')

    const [taxesAndRatesAno1, setTaxesAndRatesAno1] = React.useState('')
    const [taxesAndRatesAno2, setTaxesAndRatesAno2] = React.useState('')
    const [taxesAndRatesAno3, setTaxesAndRatesAno3] = React.useState('')
    const [taxesAndRatesAno4, setTaxesAndRatesAno4] = React.useState('')
    const [taxesAndRatesAno5, setTaxesAndRatesAno5] = React.useState('')

    const [expensesWithRentAno1, setExpensesWithRentAno1] = React.useState('')
    const [expensesWithRentAno2, setExpensesWithRentAno2] = React.useState('')
    const [expensesWithRentAno3, setExpensesWithRentAno3] = React.useState('')
    const [expensesWithRentAno4, setExpensesWithRentAno4] = React.useState('')
    const [expensesWithRentAno5, setExpensesWithRentAno5] = React.useState('')

    const [depreciationAno1, setDepreciationAno1] = React.useState('')
    const [depreciationAno2, setDepreciationAno2] = React.useState('')
    const [depreciationAno3, setDepreciationAno3] = React.useState('')
    const [depreciationAno4, setDepreciationAno4] = React.useState('')
    const [depreciationAno5, setDepreciationAno5] = React.useState('')

    const [otherNonOperatingExpensesAno1, setOtherNonOperatingExpensesAno1] = React.useState('')
    const [otherNonOperatingExpensesAno2, setOtherNonOperatingExpensesAno2] = React.useState('')
    const [otherNonOperatingExpensesAno3, setOtherNonOperatingExpensesAno3] = React.useState('')
    const [otherNonOperatingExpensesAno4, setOtherNonOperatingExpensesAno4] = React.useState('')
    const [otherNonOperatingExpensesAno5, setOtherNonOperatingExpensesAno5] = React.useState('')

    const [netSalesAno1, setNetSalesAno1] = React.useState('')
    const [netSalesAno2, setNetSalesAno2] = React.useState('')
    const [netSalesAno3, setNetSalesAno3] = React.useState('')
    const [netSalesAno4, setNetSalesAno4] = React.useState('')
    const [netSalesAno5, setNetSalesAno5] = React.useState('')

    const [netUtilityAno1, setNetUtilityAno1] = React.useState('')
    const [netUtilityAno2, setNetUtilityAno2] = React.useState('')
    const [netUtilityAno3, setNetUtilityAno3] = React.useState('')
    const [netUtilityAno4, setNetUtilityAno4] = React.useState('')
    const [netUtilityAno5, setNetUtilityAno5] = React.useState('')

    const [shoopingAno1, setShoopingAno1] = React.useState('')
    const [shoopingAno2, setShoopingAno2] = React.useState('')
    const [shoopingAno3, setShoopingAno3] = React.useState('')
    const [shoopingAno4, setShoopingAno4] = React.useState('')
    const [shoopingAno5, setShoopingAno5] = React.useState('')

    const [addedValueAno1, setAddedValueAno1] = React.useState('')
    const [addedValueAno2, setAddedValueAno2] = React.useState('')
    const [addedValueAno3, setAddedValueAno3] = React.useState('')
    const [addedValueAno4, setAddedValueAno4] = React.useState('')
    const [addedValueAno5, setAddedValueAno5] = React.useState('')

    const [totalActiveAno1, setTotalActiveAno1] = React.useState('')
    const [totalActiveAno2, setTotalActiveAno2] = React.useState('')
    const [totalActiveAno3, setTotalActiveAno3] = React.useState('')
    const [totalActiveAno4, setTotalActiveAno4] = React.useState('')
    const [totalActiveAno5, setTotalActiveAno5] = React.useState('')

    const [totalEmployeeAno1, setTotalEmployeeAno1] = React.useState('')
    const [totalEmployeeAno2, setTotalEmployeeAno2] = React.useState('')
    const [totalEmployeeAno3, setTotalEmployeeAno3] = React.useState('')
    const [totalEmployeeAno4, setTotalEmployeeAno4] = React.useState('')
    const [totalEmployeeAno5, setTotalEmployeeAno5] = React.useState('')

    const [fixedAssetAno1, setFixedAssetAno1] = React.useState('')
    const [fixedAssetAno2, setFixedAssetAno2] = React.useState('')
    const [fixedAssetAno3, setFixedAssetAno3] = React.useState('')
    const [fixedAssetAno4, setFixedAssetAno4] = React.useState('')
    const [fixedAssetAno5, setFixedAssetAno5] = React.useState('')

    var fixedCostAno1 = Number(personalExpensesAno1) + Number(financialExpensesAno1) + Number(taxesAndRatesAno1) + Number(expensesWithRentAno1) + Number(depreciationAno1) + Number(otherNonOperatingExpensesAno1);
    var fixedCostAno2 = Number(personalExpensesAno2) + Number(financialExpensesAno2) + Number(taxesAndRatesAno2) + Number(expensesWithRentAno2) + Number(depreciationAno2) + Number(otherNonOperatingExpensesAno2);
    var fixedCostAno3 = Number(personalExpensesAno3) + Number(financialExpensesAno3) + Number(taxesAndRatesAno3) + Number(expensesWithRentAno3) + Number(depreciationAno3) + Number(otherNonOperatingExpensesAno3);
    var fixedCostAno4 = Number(personalExpensesAno4) + Number(financialExpensesAno4) + Number(taxesAndRatesAno4) + Number(expensesWithRentAno4) + Number(depreciationAno4) + Number(otherNonOperatingExpensesAno4);
    var fixedCostAno5 = Number(personalExpensesAno5) + Number(financialExpensesAno5) + Number(taxesAndRatesAno5) + Number(expensesWithRentAno5) + Number(depreciationAno5) + Number(otherNonOperatingExpensesAno5);


    var variableCostAno1 = Number(shoopingAno1);
    var variableCostAno2 = Number(shoopingAno2);
    var variableCostAno3 = Number(shoopingAno3);
    var variableCostAno4 = Number(shoopingAno4);
    var variableCostAno5 = Number(shoopingAno5);

    var salesAno1 = Number(netSalesAno1);
    var salesAno2 = Number(netSalesAno2);
    var salesAno3 = Number(netSalesAno3);
    var salesAno4 = Number(netSalesAno4);
    var salesAno5 = Number(netSalesAno5);

    var posPeAno1 = (Number(fixedCostAno1) / (Number(1) - (Number(variableCostAno1) / Number(salesAno1)))) / Number(salesAno1);
    var posPeAno2 = (Number(fixedCostAno2) / (Number(1) - (Number(variableCostAno2) / Number(salesAno2)))) / Number(salesAno2);
    var posPeAno3 = (Number(fixedCostAno3) / (Number(1) - (Number(variableCostAno3) / Number(salesAno3)))) / Number(salesAno3);
    var posPeAno4 = (Number(fixedCostAno4) / (Number(1) - (Number(variableCostAno4) / Number(salesAno4)))) / Number(salesAno4);
    var posPeAno5 = (Number(fixedCostAno5) / (Number(1) - (Number(variableCostAno5) / Number(salesAno5)))) / Number(salesAno5);

    var marginAno1 = 1 - posPeAno1;
    var marginAno2 = 1 - posPeAno2;
    var marginAno3 = 1 - posPeAno3;
    var marginAno4 = 1 - posPeAno4;
    var marginAno5 = 1 - posPeAno5;

    //Z-Altman
    const [zWorkingCapitalAno1, setZworkingCapitalAno1] = React.useState('')
    const [zWorkingCapitalAno2, setZworkingCapitalAno2] = React.useState('')
    const [zWorkingCapitalAno3, setZworkingCapitalAno3] = React.useState('')
    const [zWorkingCapitalAno4, setZworkingCapitalAno4] = React.useState('')
    const [zWorkingCapitalAno5, setZworkingCapitalAno5] = React.useState('')

    const [zRetainedUtilityAno1, setZretainedUtilityAno1] = React.useState('')
    const [zRetainedUtilityAno2, setZretainedUtilityAno2] = React.useState('')
    const [zRetainedUtilityAno3, setZretainedUtilityAno3] = React.useState('')
    const [zRetainedUtilityAno4, setZretainedUtilityAno4] = React.useState('')
    const [zRetainedUtilityAno5, setZretainedUtilityAno5] = React.useState('')

    const [zInterestUtilityAno1, setZinterestUtilityAno1] = React.useState('')
    const [zInterestUtilityAno2, setZinterestUtilityAno2] = React.useState('')
    const [zInterestUtilityAno3, setZinterestUtilityAno3] = React.useState('')
    const [zInterestUtilityAno4, setZinterestUtilityAno4] = React.useState('')
    const [zInterestUtilityAno5, setZinterestUtilityAno5] = React.useState('')

    const [zValueEquityAno1, setZvalueEquityAno1] = React.useState('')
    const [zValueEquityAno2, setZvalueEquityAno2] = React.useState('')
    const [zValueEquityAno3, setZvalueEquityAno3] = React.useState('')
    const [zValueEquityAno4, setZvalueEquityAno4] = React.useState('')
    const [zValueEquityAno5, setZvalueEquityAno5] = React.useState('')

    const [zValueDebtAno1, setZvalueDebtAno1] = React.useState('')
    const [zValueDebtAno2, setZvalueDebtAno2] = React.useState('')
    const [zValueDebtAno3, setZvalueDebtAno3] = React.useState('')
    const [zValueDebtAno4, setZvalueDebtAno4] = React.useState('')
    const [zValueDebtAno5, setZvalueDebtAno5] = React.useState('')

    const [ztotalActiveAno1, setZtotalActiveAno1] = React.useState('')
    const [ztotalActiveAno2, setZtotalActiveAno2] = React.useState('')
    const [ztotalActiveAno3, setZtotalActiveAno3] = React.useState('')
    const [ztotalActiveAno4, setZtotalActiveAno4] = React.useState('')
    const [ztotalActiveAno5, setZtotalActiveAno5] = React.useState('')

    var X1Ano1 = zWorkingCapitalAno1 / ztotalActiveAno1;
    var X1Ano2 = zWorkingCapitalAno2 / ztotalActiveAno2;
    var X1Ano3 = zWorkingCapitalAno3 / ztotalActiveAno3;
    var X1Ano4 = zWorkingCapitalAno4 / ztotalActiveAno4;
    var X1Ano5 = zWorkingCapitalAno5 / ztotalActiveAno5;

    var X2Ano1 = zRetainedUtilityAno1 / ztotalActiveAno1;
    var X2Ano2 = zRetainedUtilityAno2 / ztotalActiveAno2;
    var X2Ano3 = zRetainedUtilityAno3 / ztotalActiveAno3;
    var X2Ano4 = zRetainedUtilityAno4 / ztotalActiveAno4;
    var X2Ano5 = zRetainedUtilityAno5 / ztotalActiveAno5;

    var X3Ano1 = zInterestUtilityAno1 / ztotalActiveAno1;
    var X3Ano2 = zInterestUtilityAno2 / ztotalActiveAno2;
    var X3Ano3 = zInterestUtilityAno3 / ztotalActiveAno3;
    var X3Ano4 = zInterestUtilityAno4 / ztotalActiveAno4;
    var X3Ano5 = zInterestUtilityAno5 / ztotalActiveAno5;


    var X4Ano1 = zValueEquityAno1 / zValueDebtAno1;
    var X4Ano2 = zValueEquityAno2 / zValueDebtAno2;
    var X4Ano3 = zValueEquityAno3 / zValueDebtAno3;
    var X4Ano4 = zValueEquityAno4 / zValueDebtAno4;
    var X4Ano5 = zValueEquityAno5 / zValueDebtAno5;

    var altmanAno1 = (6.56 * Number(X1Ano1)) + (Number(X2Ano1)) + (Number(X3Ano1)) + (Number(X4Ano1));
    var altmanAno2 = (6.56 * Number(X1Ano2)) + (Number(X2Ano2)) + (Number(X3Ano2)) + (Number(X4Ano2));
    var altmanAno3 = (6.56 * Number(X1Ano3)) + (Number(X2Ano3)) + (Number(X3Ano3)) + (Number(X4Ano3));
    var altmanAno4 = (6.56 * Number(X1Ano4)) + (Number(X2Ano4)) + (Number(X3Ano4)) + (Number(X4Ano4));
    var altmanAno5 = (6.56 * Number(X1Ano5)) + (Number(X2Ano5)) + (Number(X3Ano5)) + (Number(X4Ano5));


    return (
        <div>
            <h1 style={backgroundTitles}>Entradas MPVA</h1>


            <div>
                <Input
                    type="number"
                    placeholder="Gastos personales Año 1"
                    onChange={(e) => setPersonalExpensesAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Gastos personales Año 2"
                    onChange={(e) => setPersonalExpensesAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Gastos personales Año 3"
                    onChange={(e) => setPersonalExpensesAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Gastos personales Año 4"
                    onChange={(e) => setPersonalExpensesAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Gastos personales Año 5"
                    onChange={(e) => setPersonalExpensesAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Gastos financieros Año 1"
                    onChange={(e) => setFinancialExpensesAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Gastos financieros Año 2"
                    onChange={(e) => setFinancialExpensesAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Gastos financieros Año 3"
                    onChange={(e) => setFinancialExpensesAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Gastos financieros Año 4"
                    onChange={(e) => setFinancialExpensesAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Gastos financieros Año 5"
                    onChange={(e) => setFinancialExpensesAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Impuestos y tasas Año 1"
                    onChange={(e) => setTaxesAndRatesAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Impuestos y tasas Año 2"
                    onChange={(e) => setTaxesAndRatesAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Impuestos y tasas Año 3"
                    onChange={(e) => setTaxesAndRatesAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Impuestos y tasas Año 4"
                    onChange={(e) => setTaxesAndRatesAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Impuestos y tasas Año 5"
                    onChange={(e) => setTaxesAndRatesAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Gastos con Alquiler Año 1"
                    onChange={(e) => setExpensesWithRentAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Gastos con Alquiler Año 2"
                    onChange={(e) => setExpensesWithRentAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Gastos con Alquiler Año 3"
                    onChange={(e) => setExpensesWithRentAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Gastos con Alquiler Año 4"
                    onChange={(e) => setExpensesWithRentAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Gastos con Alquiler Año 5"
                    onChange={(e) => setExpensesWithRentAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Depreciacion Año 1"
                    onChange={(e) => setDepreciationAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Depreciacion Año 2"
                    onChange={(e) => setDepreciationAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Depreciacion Año 3"
                    onChange={(e) => setDepreciationAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Depreciacion Año 4"
                    onChange={(e) => setDepreciationAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Depreciacion Año 5"
                    onChange={(e) => setDepreciationAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Otros gastos no operativos Año 1"
                    onChange={(e) => setOtherNonOperatingExpensesAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Otros gastos no operativos Año 2"
                    onChange={(e) => setOtherNonOperatingExpensesAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Otros gastos no operativos Año 3"
                    onChange={(e) => setOtherNonOperatingExpensesAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Otros gastos no operativos Año 4"
                    onChange={(e) => setOtherNonOperatingExpensesAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Otros gastos no operativos Año 5"
                    onChange={(e) => setOtherNonOperatingExpensesAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Ventas netas Año 1"
                    onChange={(e) => setNetSalesAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Ventas netas Año 2"
                    onChange={(e) => setNetSalesAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Ventas netas Año 3"
                    onChange={(e) => setNetSalesAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Ventas netas Año 4"
                    onChange={(e) => setNetSalesAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Ventas netas Año 5"
                    onChange={(e) => setNetSalesAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Utilidades netas Año 1"
                    onChange={(e) => setNetUtilityAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Utilidades netas Año 2"
                    onChange={(e) => setNetUtilityAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Utilidades netas Año 3"
                    onChange={(e) => setNetUtilityAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Utilidades netas Año 4"
                    onChange={(e) => setNetUtilityAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Utilidades netas Año 5"
                    onChange={(e) => setNetUtilityAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Compras Año 1"
                    onChange={(e) => setShoopingAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Compras Año 2"
                    onChange={(e) => setShoopingAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Compras Año 3"
                    onChange={(e) => setShoopingAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Compras Año 4"
                    onChange={(e) => setShoopingAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Compras Año 5"
                    onChange={(e) => setShoopingAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Valor agregado Año 1"
                    onChange={(e) => setAddedValueAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Valor agregado Año 2"
                    onChange={(e) => setAddedValueAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Valor agregado Año 3"
                    onChange={(e) => setAddedValueAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Valor agregado Año 4"
                    onChange={(e) => setAddedValueAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Valor agregado Año 5"
                    onChange={(e) => setAddedValueAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Activo total Año 1"
                    onChange={(e) => setTotalActiveAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Activo total Año Año 2"
                    onChange={(e) => setTotalActiveAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Activo total Año 3"
                    onChange={(e) => setTotalActiveAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Activo total Año 4"
                    onChange={(e) => setTotalActiveAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Activo total Año 5"
                    onChange={(e) => setTotalActiveAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Total de empleados Año 1"
                    onChange={(e) => setTotalEmployeeAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Total de empleados Año 2"
                    onChange={(e) => setTotalEmployeeAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Total de empleados Año 3"
                    onChange={(e) => setTotalEmployeeAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Total de empleados Año 4"
                    onChange={(e) => setTotalEmployeeAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Total de empleados Año 5"
                    onChange={(e) => setTotalEmployeeAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Activos Fijos Año 1"
                    onChange={(e) => setFixedAssetAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Activos Fijos Año 2"
                    onChange={(e) => setFixedAssetAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Activos Fijos Año 3"
                    onChange={(e) => setFixedAssetAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Activos Fijos Año 4"
                    onChange={(e) => setFixedAssetAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Activos Fijos Año 5"
                    onChange={(e) => setFixedAssetAno5(e)}
                />
            </div>

            <h1 style={backgroundTitles}>Indicadores</h1>

            <h2>Factor Gestion</h2>

            <div class="row">
                <div class="column">
                    <h3>-</h3>
                    <h3> Productividad del capital </h3>
                    <h3> % del VA en relacion a las Ventas </h3>
                    <h3> Rotacion del Activo </h3>
                    <h3> Margen Neto  </h3>
                    <h3> Retorno sobre los Activos </h3>
                </div>
                <div class="column">
                    <h3>Año 1</h3>
                    <h3> {(Number(addedValueAno1) / Number(totalActiveAno1)).toFixed(2)} </h3>
                    <h3> {(Number(addedValueAno1) / Number(netSalesAno1)).toFixed(2)} </h3>
                    <h3> {(Number(netSalesAno1) / Number(totalActiveAno1)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno1) / Number(netSalesAno1)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno1) / Number(totalActiveAno1)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 2</h3>
                    <h3> {(Number(addedValueAno2) / Number(totalActiveAno2)).toFixed(2)} </h3>
                    <h3> {(Number(addedValueAno2) / Number(netSalesAno2)).toFixed(2)} </h3>
                    <h3> {(Number(netSalesAno2) / Number(totalActiveAno2)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno2) / Number(netSalesAno2)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno2) / Number(totalActiveAno2)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 3</h3>
                    <h3> {(Number(addedValueAno3) / Number(totalActiveAno3)).toFixed(2)} </h3>
                    <h3> {(Number(addedValueAno3) / Number(netSalesAno3)).toFixed(2)} </h3>
                    <h3> {(Number(netSalesAno3) / Number(totalActiveAno3)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno3) / Number(netSalesAno3)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno3) / Number(totalActiveAno3)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 4</h3>
                    <h3> {(Number(addedValueAno4) / Number(totalActiveAno4)).toFixed(2)} </h3>
                    <h3> {(Number(addedValueAno4) / Number(netSalesAno4)).toFixed(2)} </h3>
                    <h3> {(Number(netSalesAno4) / Number(totalActiveAno4)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno4) / Number(netSalesAno4)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno4) / Number(totalActiveAno4)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 5</h3>
                    <h3> {(Number(addedValueAno5) / Number(totalActiveAno5)).toFixed(2)} </h3>
                    <h3> {(Number(addedValueAno5) / Number(netSalesAno5)).toFixed(2)} </h3>
                    <h3> {(Number(netSalesAno5) / Number(totalActiveAno5)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno5) / Number(netSalesAno5)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno5) / Number(totalActiveAno5)).toFixed(2)} </h3>
                </div>

            </div>

            <h2>Factor Humano</h2>

            <div class="row">
                <div class="column">
                    <h3>-</h3>
                    <h3> Productividad Laboral </h3>
                    <h3> Ventas por Empleado </h3>
                    <h3> Intensidad del Capital Total</h3>
                    <h3> Contribucion de los costos de Personal en el VA </h3>
                </div>
                <div class="column">
                    <h3>Año 1</h3>
                    <h3> {(Number(addedValueAno1) / Number(totalEmployeeAno1)).toFixed(2)} </h3>
                    <h3> {(Number(netSalesAno1) / Number(totalEmployeeAno1)).toFixed(2)} </h3>
                    <h3> {(Number(totalActiveAno1) / Number(totalEmployeeAno1)).toFixed(2)} </h3>
                    <h3> {(Number(addedValueAno1) / Number(personalExpensesAno1)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 2</h3>
                    <h3> {(Number(addedValueAno2) / Number(totalEmployeeAno2)).toFixed(2)} </h3>
                    <h3> {(Number(netSalesAno2) / Number(totalEmployeeAno2)).toFixed(2)} </h3>
                    <h3> {(Number(totalActiveAno2) / Number(totalEmployeeAno2)).toFixed(2)} </h3>
                    <h3> {(Number(addedValueAno2) / Number(personalExpensesAno2)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 3</h3>
                    <h3> {(Number(addedValueAno3) / Number(totalEmployeeAno3)).toFixed(2)} </h3>
                    <h3> {(Number(netSalesAno3) / Number(totalEmployeeAno3)).toFixed(2)} </h3>
                    <h3> {(Number(totalActiveAno3) / Number(totalEmployeeAno3)).toFixed(2)} </h3>
                    <h3> {(Number(addedValueAno3) / Number(personalExpensesAno3)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 4</h3>
                    <h3> {(Number(addedValueAno4) / Number(totalEmployeeAno4)).toFixed(2)} </h3>
                    <h3> {(Number(netSalesAno4) / Number(totalEmployeeAno4)).toFixed(2)} </h3>
                    <h3> {(Number(totalActiveAno4) / Number(totalEmployeeAno4)).toFixed(2)} </h3>
                    <h3> {(Number(addedValueAno4) / Number(personalExpensesAno4)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 5</h3>
                    <h3> {(Number(addedValueAno5) / Number(totalEmployeeAno5)).toFixed(2)} </h3>
                    <h3> {(Number(netSalesAno5) / Number(totalEmployeeAno5)).toFixed(2)} </h3>
                    <h3> {(Number(totalActiveAno5) / Number(totalEmployeeAno5)).toFixed(2)} </h3>
                    <h3> {(Number(addedValueAno5) / Number(personalExpensesAno5)).toFixed(2)} </h3>
                </div>
            </div>

            <h2 >Factor Medios de produccion</h2>
            <div class="row">
                <div class="column">
                    <h3>-</h3>
                    <h3> Productividad de Bienes de capital </h3>
                    <h3> Contribucion de los Bienes de capital en las Ventas </h3>
                    <h3> Intensidad de los Bienes de capital </h3>
                </div>
                <div class="column">
                    <h3>Año 1</h3>
                    <h3> {(Number(addedValueAno1) / Number(fixedAssetAno1)).toFixed(2)} </h3>
                    <h3> {(Number(shoopingAno1) / Number(fixedAssetAno1)).toFixed(2)} </h3>
                    <h3> {(Number(fixedAssetAno1) / Number(totalEmployeeAno1)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 2</h3>
                    <h3> {(Number(addedValueAno2) / Number(fixedAssetAno2)).toFixed(2)} </h3>
                    <h3> {(Number(shoopingAno2) / Number(fixedAssetAno2)).toFixed(2)} </h3>
                    <h3> {(Number(fixedAssetAno2) / Number(totalEmployeeAno2)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 3</h3>
                    <h3> {(Number(addedValueAno3) / Number(fixedAssetAno3)).toFixed(2)} </h3>
                    <h3> {(Number(shoopingAno3) / Number(fixedAssetAno3)).toFixed(2)} </h3>
                    <h3> {(Number(fixedAssetAno3) / Number(totalEmployeeAno3)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 4</h3>
                    <h3> {(Number(addedValueAno4) / Number(fixedAssetAno4)).toFixed(2)} </h3>
                    <h3> {(Number(shoopingAno4) / Number(fixedAssetAno4)).toFixed(2)} </h3>
                    <h3> {(Number(fixedAssetAno4) / Number(totalEmployeeAno4)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 5</h3>
                    <h3> {(Number(addedValueAno5) / Number(fixedAssetAno5)).toFixed(2)} </h3>
                    <h3> {(Number(shoopingAno5) / Number(fixedAssetAno5)).toFixed(2)} </h3>
                    <h3> {(Number(fixedAssetAno5) / Number(totalEmployeeAno5)).toFixed(2)} </h3>
                </div>
            </div>

            <h2 >Referencial de distribucion</h2>

            <div class="row">
                <div class="column">
                    <h3>-</h3>
                    <h3> Participacion Laboral </h3>
                    <h3> Participacion del Inversionista </h3>
                </div>
                <div class="column">
                    <h3>Año 1</h3>
                    <h3> {(Number(personalExpensesAno1) / Number(addedValueAno1)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno1) / Number(addedValueAno1)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 2</h3>
                    <h3> {(Number(personalExpensesAno2) / Number(addedValueAno2)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno2) / Number(addedValueAno2)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 3</h3>
                    <h3> {(Number(personalExpensesAno3) / Number(addedValueAno3)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno3) / Number(addedValueAno3)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 4</h3>
                    <h3> {(Number(personalExpensesAno4) / Number(addedValueAno4)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno4) / Number(addedValueAno4)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 5</h3>
                    <h3> {(Number(personalExpensesAno5) / Number(addedValueAno5)).toFixed(2)} </h3>
                    <h3> {(Number(netUtilityAno5) / Number(addedValueAno5)).toFixed(2)} </h3>
                </div>
            </div>

            <h1>Puntos de Equilibrio</h1>

            <h2>Punto de Equilibrio en dolares</h2>
            <div class="row">
                <div class="column">
                    <h3>-</h3>
                    <h3> Costos Fijos </h3>
                    <h3> Costos Variables </h3>
                    <h3> Ventas(Ingresos)</h3>
                    <h3> Punto de Equilibrio </h3>
                </div>
                <div class="column">
                    <h3>Año 1</h3>
                    <h3> {(Number(fixedCostAno1)).toFixed(2)} </h3>
                    <h3> {(Number(variableCostAno1)).toFixed(2)} </h3>
                    <h3> {(Number(salesAno1)).toFixed(2)} </h3>
                    <h3> {(Number(fixedCostAno1) / (Number(1) - (Number(variableCostAno1) / Number(salesAno1)))).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 2</h3>
                    <h3> {(Number(fixedCostAno2)).toFixed(2)} </h3>
                    <h3> {(Number(variableCostAno2)).toFixed(2)} </h3>
                    <h3> {(Number(salesAno2)).toFixed(2)} </h3>
                    <h3> {(Number(fixedCostAno2) / (Number(1) - (Number(variableCostAno2) / Number(salesAno2)))).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 3</h3>
                    <h3> {(Number(fixedCostAno3)).toFixed(2)} </h3>
                    <h3> {(Number(variableCostAno3)).toFixed(2)} </h3>
                    <h3> {(Number(salesAno3)).toFixed(2)} </h3>
                    <h3> {(Number(fixedCostAno3) / (Number(1) - (Number(variableCostAno3) / Number(salesAno3)))).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 4</h3>
                    <h3> {(Number(fixedCostAno4)).toFixed(2)} </h3>
                    <h3> {(Number(variableCostAno4)).toFixed(2)} </h3>
                    <h3> {(Number(salesAno4)).toFixed(2)} </h3>
                    <h3> {(Number(fixedCostAno4) / (Number(1) - (Number(variableCostAno4) / Number(salesAno4)))).toFixed(2)} </h3>

                </div>
                <div class="column">
                    <h3>Año 5</h3>
                    <h3> {(Number(fixedCostAno5)).toFixed(2)} </h3>
                    <h3> {(Number(variableCostAno5)).toFixed(2)} </h3>
                    <h3> {(Number(salesAno5)).toFixed(2)} </h3>
                    <h3> {(Number(fixedCostAno5) / (Number(1) - (Number(variableCostAno5) / Number(salesAno5)))).toFixed(2)} </h3>
                </div>
            </div>

            <h2>Posicion del punto de equilibrio en terminos de ventas(Ingresos) y margen de seguridad</h2>

            <div class="row">
                <div class="column">
                    <h3>-</h3>
                    <h3> Punto de Equilibrio </h3>
                    <h3> Ventas(Ingresos)</h3>
                    <h3> Posicion del PE </h3>
                    <h3> Margen de Seguridad </h3>
                </div>
                <div class="column">
                    <h3>Año 1</h3>
                    <h3> {(Number(fixedCostAno1) / (Number(1) - (Number(variableCostAno1) / Number(salesAno1)))).toFixed(2)} </h3>
                    <h3> {(Number(salesAno1)).toFixed(2)} </h3>
                    <h3> {(Number(posPeAno1)).toFixed(2)} </h3>
                    <h3> {(Number(marginAno1)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 2</h3>
                    <h3> {(Number(fixedCostAno2) / (Number(1) - (Number(variableCostAno2) / Number(salesAno2)))).toFixed(2)} </h3>
                    <h3> {(Number(salesAno2)).toFixed(2)} </h3>
                    <h3> {(Number(posPeAno2)).toFixed(2)} </h3>
                    <h3> {(Number(marginAno2)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 3</h3>
                    <h3> {(Number(fixedCostAno3) / (Number(1) - (Number(variableCostAno3) / Number(salesAno3)))).toFixed(2)} </h3>
                    <h3> {(Number(salesAno3)).toFixed(2)} </h3>
                    <h3> {(Number(posPeAno3)).toFixed(2)} </h3>
                    <h3> {(Number(marginAno3)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 4</h3>
                    <h3> {(Number(fixedCostAno4) / (Number(1) - (Number(variableCostAno4) / Number(salesAno4)))).toFixed(2)} </h3>
                    <h3> {(Number(salesAno4)).toFixed(2)} </h3>
                    <h3> {(Number(posPeAno4)).toFixed(2)} </h3>
                    <h3> {(Number(marginAno4)).toFixed(2)} </h3>
                </div>
                <div class="column">
                    <h3>Año 5</h3>
                    <h3> {(Number(fixedCostAno5) / (Number(1) - (Number(variableCostAno5) / Number(salesAno5)))).toFixed(2)} </h3>
                    <h3> {(Number(salesAno5)).toFixed(2)} </h3>
                    <h3> {(Number(posPeAno5)).toFixed(2)} </h3>
                    <h3> {(Number(marginAno5)).toFixed(2)} </h3>
                </div>
            </div>


            <div>
                <h1>Modelo de Prediccion de Quiebras</h1>
                <Input
                    type="number"
                    placeholder="Capital de Trabajo Año 1"
                    onChange={(e) => setZworkingCapitalAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Capital de Trabajo Año 2"
                    onChange={(e) => setZworkingCapitalAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Capital de Trabajo Año 3"
                    onChange={(e) => setZworkingCapitalAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Capital de Trabajo Año 4"
                    onChange={(e) => setZworkingCapitalAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Capital de Trabajo Año 5"
                    onChange={(e) => setZworkingCapitalAno5(e)}
                />
            </div>


            <div>
                <Input
                    type="number"
                    placeholder="Utilidades retenidas Año 1"
                    onChange={(e) => setZretainedUtilityAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Utilidades retenidas Año 2"
                    onChange={(e) => setZretainedUtilityAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Utilidades retenidas Año 3"
                    onChange={(e) => setZretainedUtilityAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Utilidades retenidas Año 4"
                    onChange={(e) => setZretainedUtilityAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Utilidades retenidas Año 5"
                    onChange={(e) => setZretainedUtilityAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Utilidad antes de Intereses e Impuestos Año 1"
                    onChange={(e) => setZinterestUtilityAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Utilidad antes de Intereses e Impuestos Año 2"
                    onChange={(e) => setZinterestUtilityAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Utilidad antes de Intereses e Impuestos Año 3"
                    onChange={(e) => setZinterestUtilityAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Utilidad antes de Intereses e Impuestos Año 4"
                    onChange={(e) => setZinterestUtilityAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Utilidad antes de Intereses e Impuestos Año 5"
                    onChange={(e) => setZinterestUtilityAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Valor Contable del Patrimonio Año 1"
                    onChange={(e) => setZvalueEquityAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Valor Contable del Patrimonio Año 2"
                    onChange={(e) => setZvalueEquityAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Valor Contable del Patrimonio Año 3"
                    onChange={(e) => setZvalueEquityAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Valor Contable del Patrimonio Año 4"
                    onChange={(e) => setZvalueEquityAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Valor Contable del Patrimonio Año 5"
                    onChange={(e) => setZvalueEquityAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder="Valores en Libros del Total de la Deuda Año 1"
                    onChange={(e) => setZvalueDebtAno1(e)}
                />
                <Input
                    type="number"
                    placeholder="Valores en Libros del Total de la Deuda Año 2"
                    onChange={(e) => setZvalueDebtAno2(e)}
                />
                <Input
                    type="number"
                    placeholder="Valores en Libros del Total de la Deuda Año 2"
                    onChange={(e) => setZvalueDebtAno3(e)}
                />
                <Input
                    type="number"
                    placeholder="Valores en Libros del Total de la Deuda Año 4"
                    onChange={(e) => setZvalueDebtAno4(e)}
                />
                <Input
                    type="number"
                    placeholder="Valores en Libros del Total de la Deuda Año 5"
                    onChange={(e) => setZvalueDebtAno5(e)}
                />
            </div>

            <div>
                <Input
                    type="number"
                    placeholder=" Activos totales Año 1"
                    onChange={(e) => setZtotalActiveAno1(e)}
                />
                <Input
                    type="number"
                    placeholder=" Activos totales Año 2"
                    onChange={(e) => setZtotalActiveAno2(e)}
                />
                <Input
                    type="number"
                    placeholder=" Activos totales Año 3"
                    onChange={(e) => setZtotalActiveAno3(e)}
                />
                <Input
                    type="number"
                    placeholder=" Activos totales Año 4"
                    onChange={(e) => setZtotalActiveAno4(e)}
                />
                <Input
                    type="number"
                    placeholder=" Activos totales Año 5"
                    onChange={(e) => setZtotalActiveAno5(e)}
                />
            </div>

            <div class="row">
                <div class="column" style={backgroundd}>
                    <h3>-</h3>
                    <h3> Z-Altman </h3>
                </div>
                <div class="column" style={backgroundd}>
                    <h3>Z Año 1</h3>
                    <h3> {Number(altmanAno1)} </h3>
                </div>
                <div class="column" style={backgroundd}>
                    <h3>Z Año 2</h3>
                    <h3> {Number(altmanAno2)} </h3>
                </div>
                <div class="column" style={backgroundd}>
                    <h3>Z Año 3</h3>
                    <h3> {Number(altmanAno3)} </h3>
                </div>
                <div class="column" style={backgroundd}>
                    <h3>Z Año 4</h3>
                    <h3> {Number(altmanAno4)} </h3>
                </div>
                <div class="column" style={backgroundd}>
                    <h3>Z Año 5</h3>
                    <h3> {Number(altmanAno5)} </h3>
                </div>
            </div>

        </div>
    );
}

export default TableData;