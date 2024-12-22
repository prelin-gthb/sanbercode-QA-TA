Feature: Add Sales Transaction

  Background:
    Given User is logged in
    And User is on the Dashboard page

  Scenario: User successfully adds a new sale
    Given User clicks the "Penjualan" menu
    When User clicks the "Tambah" button
    And User clicks the search icon
    And User selects the product "Paku"
    And User inputs Jumlah "1"
    And User inputs Jumlah Bayar "1000"
    And User clicks the "Bayar" button
    Then User should see the pop-up "Transaksi Sukses"
    And The product "Paku" should be listed with Jumlah "1" and Jumlah Bayar "1000"

  Scenario: User enters a payment amount less than the total payment amount
    Given User clicks the "Penjualan" menu
    When User clicks the "Tambah" button
    And User clicks the search icon
    And User selects the product "Paku"
    And User inputs Jumlah "1"
    And User inputs Jumlah Bayar "500"
    And User clicks the "Bayar" button
    Then No changes should occur
