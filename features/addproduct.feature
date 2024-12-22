Feature: Add Product

  Background:
    Given User is logged in 

  Scenario: User successfully adds a new product
    Given User is on the Dashboard page
    When User clicks the "Produk" menu
    And User clicks the "Tambah" button
    And User inputs Kode "P0002"
    And User inputs Nama "Paku Payung"
    And User inputs Harga Beli "500"
    And User inputs Deskripsi "Paku"
    And User inputs Harga Jual "1000"
    And User inputs Stok "100"
    And User clicks the vertical ellipsis icon of Kategori
    And User selects Kategori "Umum"
    And User clicks the "Submit" button
    Then User should see the success toast message "success. item ditambahkan"
    And User should be redirected to the product list page

  Scenario: User did not input product's stock
    Given User is on the Produk page
    When User clicks the "Tambah" button
    And User inputs Kode "P0002"
    And User inputs Nama "Paku Payung"
    And User inputs Deskripsi "Paku"
    And User inputs Harga Beli "500"
    And User inputs Harga Jual "1000"
    And User clicks the vertical ellipsis icon of Kategori
    And User selects Kategori "Umum"
    And User clicks the "Submit" button
    Then User should see an error message "stock must be a number"