# -*- mode: ruby -*-
# vi: set ft=ruby :
#VAGRANT_EXPERIMENTAL="disks"


Vagrant.configure("2") do |config|
    config.vm.box = "debian/bookworm64"
    
    config.vm.provider "virtualbox" do |vb|
      vb.gui = false
      vb.memory = "1024"
    end
  
    #
    # Configuracao da vm do professor
    #
    config.vm.define "Debian12-ASA-Server01" do |prof|
      prof.vm.hostname = "Debian12-ASA-Server01"
      prof.vm.network "private_network", ip: "192.168.57.25"
      prof.vm.network "public_network", bridge: "enp1s0"
  
      prof.vm.provider "virtualbox" do |vb|
        vb.name = "Debian12-ASA-Server01"
      end

      (0..3).each do |i|
        prof.vm.disk :disk, size: "10GB", name: "disk-#{i}"
      end
    end # End conf do prof
end
  
