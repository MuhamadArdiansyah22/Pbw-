<?php 

class Product{
    private $name; //accest modifier
    private $price; 
    private $image; 

    public function __construct($name){ //Membuat constructor
        $this->name = $name; // tanda panah "->" sama seperti titik "." di java
        $this->price = $price;
        $this->image = $image;

    }

    public function hello(){ // Membuat Method
        echo "Nama Produk: $this->name";
    }
    public function getName() {
        return $this->name;
        }
        public function getImage() {
        return $this->image;
        }
        public function getOrderCount() {
        return $this->orderCount;
        }
        public function setOrderCount($orderCount) {
        $this->orderCount = $orderCount;
        }
        public function getPriceVAT() {
        return round($this->price * 1.1, 2);
        }

?>
