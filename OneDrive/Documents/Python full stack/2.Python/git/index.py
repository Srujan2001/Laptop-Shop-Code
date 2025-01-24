macbook=200000
dell=100000
hp=80000
lenovo=90000
asus=210000
samsung=150000
while True:
    print("<------------------------------------------------Welcome Laptop Shop madam/sir--------------------------------------------->")
    name=input("Enter the name:")
    phone=int(input("Enter the phone number:"))
    address=input("Enter the address")
    option=int(input("choose the options: \n 1.macbook \n 2.dell \n 3.hp\n 4.lenove\n 5.asus\n 6.samsung:"))
    if option==1:
            macbook=macbook-10/100*macbook
            print("Amount:",macbook)
            print("macbook laptop details:\n Liquid Retina XDR  35.97 cm (14.2)display \n Standard display \n Apple M4 chip with 10-core CPU, 10-core GPU, 16-core Neural Engine \n 16GB unified memory,512GB SSD storage and 70W USB-C Power Adapter")
            payment=int(input("Payment choose the options: \n 1.online \n 2.card \n 3.cash:"))
            if payment==1:
                while True:
                    online=int(input("Payment choose the options: \n 1.google pay \n 2.phonepay \n 3.paytm:"))
                    if online==1:
                        UPI=input("enter the  Google Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    elif online==2:
                        UPI=input("enter the  Phone Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    elif online==3:
                        UPI=input("enter the  Paytm Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    else:
                        print("Only pay this payment option")
                        break
            elif payment==2:
                card=int(input("Enter the Card Number:"))
                pin=int(input("Enter the PIN Number:"))
                print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                print(name,"thank you for shopping")
                break
            elif payment==3:
                cash=int(input("Enter the Cash Amount")) 
                print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                print(name,"thank you for shopping")
                break
            else:
                print("Re-Enter payment option") 
    elif option==2:
             dell=dell-15/100*dell
             print("Amount:",dell)
             print("dell laptop details:\n Generation 13th Intel® Core™ i5-1334U (12 MB cache, 10 cores, 12 threads, up to 4.60 GHz) \n Intel® UHD Graphics \n Ram 8GB, 1x8GB, DDR5, 5200MT/s and 512GB M.2 PCIe NVMe Solid State Drive")
             payment=int(input("Payment choose the options: \n 1.online \n 2.card \n 3.cash:"))
             if payment==1:
                while True:
                    online=int(input("Payment choose the options: \n 1.google pay \n 2.phonepay \n 3.paytm:"))
                    if online==1:
                        UPI=input("enter the  Google Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    elif online==2:
                        UPI=input("enter the  Phone Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    elif online==3:
                        UPI=input("enter the  Paytm Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    else:
                        print("Only pay this payment option")
                        break
             elif payment==2:
                card=int(input("Enter the Card Number:"))
                pin=int(input("Enter the PIN Number:"))
                print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                print(name,"thank you for shopping")
                break
             elif payment==3:
                cash=int(input("Enter the Cash Amount")) 
                print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                print(name,"thank you for shopping")
                break
             else:
                print("Re-Enter payment option") 
    elif option==3:
             hp=hp-9/100*hp
             print("Amount:",hp)
             print("Hp laptop details:\n Intel® Core™ Ultra 7 processor \n diagonal 2.8K OLED 400 nits VRR 48-120Hz 35.6 cm touch display with Intel\n SSD Solid State Drive1 1TB")
             payment=int(input("Payment choose the options: \n 1.online \n 2.card \n 3.cash:"))
             if payment==1:
                while True:
                    online=int(input("Payment choose the options: \n 1.google pay \n 2.phonepay \n 3.paytm:"))
                    if online==1:
                        UPI=input("enter the  Google Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    elif online==2:
                        UPI=input("enter the  Phone Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    elif online==3:
                        UPI=input("enter the  Paytm Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    else:
                        print("Only pay this payment option")
                        break
             elif payment==2:
                card=int(input("Enter the Card Number:"))
                pin=int(input("Enter the PIN Number:"))
                print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                print(name,"thank you for shopping")
                break
             elif payment==3:
                cash=int(input("Enter the Cash Amount")) 
                print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                print(name,"thank you for shopping")
                break
             else:
                print("Re-Enter payment option") 
    elif option==4:
             lenovo=lenovo-9/100*lenovo
             print("Amount:",lenovo)
             print("lenovo laptop details:\n display 15.6 HD (1366 x 768), TN, Anti-Glare, Non-Touch, 45%NTSC, 220 nits, 60Hz \n  Ram 8 GB DDR4-2400MHz (SODIMM) and 512 GB SSD M.2 2242 PCIe Gen4 TLC")
             payment=int(input("Payment choose the options: \n 1.online \n 2.card \n 3.cash:"))
             if payment==1:
                while True:
                    online=int(input("Payment choose the options: \n 1.google pay \n 2.phonepay \n 3.paytm:"))
                    if online==1:
                        UPI=input("enter the  Google Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    elif online==2:
                        UPI=input("enter the  Phone Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    elif online==3:
                        UPI=input("enter the  Paytm Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    else:
                        print("Only pay this payment option")
                        break
             elif payment==2:
                card=int(input("Enter the Card Number:"))
                pin=int(input("Enter the PIN Number:"))
                print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                print(name,"thank you for shopping")
                break
             elif payment==3:
                cash=int(input("Enter the Cash Amount")) 
                print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                print(name,"thank you for shopping")
                break
             else:
                print("Re-Enter payment option") 
    elif option==5:
             asus=asus-20/100*asus
             print("Amount:",asus)
             print("asus laptop details:\n Windows 11 Home - ASUS recommends Windows 11 Pro for business \n Up to 13th gen Intel® Core™ i9-13905H processor \n Up to 32 GB memory and Supports Up to 2 TB SSD storageUp to 40.64cm (16) 4K/UHD OLED NanoEdge display")
             payment=int(input("Payment choose the options: \n 1.online \n 2.card \n 3.cash:"))
             if payment==1:
                while True:
                    online=int(input("Payment choose the options: \n 1.google pay \n 2.phonepay \n 3.paytm:"))
                    if online==1:
                        UPI=input("enter the  Google Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    elif online==2:
                        UPI=input("enter the  Phone Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    elif online==3:
                        UPI=input("enter the  Paytm Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    else:
                        print("Only pay this payment option")
                        break
             elif payment==2:
                card=int(input("Enter the Card Number:"))
                pin=int(input("Enter the PIN Number:"))
                print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                print(name,"thank you for shopping")
                break
             elif payment==3:
                cash=int(input("Enter the Cash Amount")) 
                print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                print(name,"thank you for shopping")
                break
             else:
                print("Re-Enter payment option") 
    elif option==6:
             samsung=samsung-10/100*samsung
             print("Amount:",samsung)
             print("samsung laptop details:\n Windows OS Intel CPU USB-A, HDMI \n Drive Capacity 16 GB drive, 32 GB drive, 256 GB drive, 512 GB drive, 1 TB drive \n Screen Size14  and ")
             payment=int(input("Payment choose the options: \n 1.online \n 2.card \n 3.cash:"))
             if payment==1:
                while True:
                    online=int(input("Payment choose the options: \n 1.google pay \n 2.phonepay \n 3.paytm:"))
                    if online==1:
                        UPI=input("enter the  Google Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    elif online==2:
                        UPI=input("enter the  Phone Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    elif online==3:
                        UPI=input("enter the  Paytm Pay UPI Payment id:")
                        print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                        print(name,"thank you for shopping")
                        break
                    else:
                        print("Only pay this payment option")
                        break
             elif payment==2:
                card=int(input("Enter the Card Number:"))
                pin=int(input("Enter the PIN Number:"))
                print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                print(name,"thank you for shopping")
                break
             elif payment==3:
                cash=int(input("Enter the Cash Amount")) 
                print("Receipt:" "\nname:",name ,"\naddress:",address,"\nphone:",phone,"\nBill Amount:",macbook,"PAID AMOUNT")
                print(name,"thank you for shopping")
                break
             else:
                print("Re-Enter payment option") 
    else:
        print("Re-Enter  the option or Sorry  No laptop")
        break


