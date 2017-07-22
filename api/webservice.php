<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type, x-xsrf-token');
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");


    $post = json_decode(file_get_contents("php://input"));


    if($post){

      if(isset($post->delete)){
        $ret = delete($post->id);
        if($ret){
          $date['status'] = true;
          $date['msg'] = "Success!";
          echo json_encode($date);exit;
        }else{
          $post['status'] = false;
          $post['msg'] = "Error!";
          echo json_encode($post);exit;
        }
      }

      if(isset($post->id)){
        $ret = update($post);
        if($ret){
          $date['status'] = true;
          $date['msg'] = "Success!";
          echo json_encode($date);exit;
        }else{
          $post['status'] = false;
          $post['msg'] = "Error!";
          echo json_encode($post);exit;
        }
      }

      $id = save($post);

      if($id){
          $date['status'] = true;
          $date['msg'] = "Success! ID: {$id}";
          $date['client'] = find($id);
          echo json_encode($date);exit;
      }else{
          $post['status'] = false;
          $post['msg'] = "Error!";
          echo json_encode($post);exit;
      }

    }

    $date = listAll();
    echo json_encode($date);
    exit;

    function conn(){
        $conn = new \PDO("mysql:host=srv146.prodns.com.br;dbname=conrado_best_cus","conrado_best_cus","a1s2d3f4");
        //yes, i let
        return $conn;
    }
    function save($data){
        $db = conn();
        $query = "INSERT INTO `client` (`name`,`tel`,`address`,`email`,`cep`) values (:name,:tel,:address,:email,:cep)";
        $stmt = $db->prepare($query);
        $stmt->bindValue(':name',$data->name);
        $stmt->bindValue(':tel',$data->tel);
        $stmt->bindValue(':address',$data->address);
        $stmt->bindValue(':email',$data->email);
        $stmt->bindValue(':cep',$data->cep);
        $stmt->execute();
        return $db->lastInsertId();
    }
    function update($data){
        $db = conn();
        $query = "UPDATE `client` SET `name`=:name,`tel`=:tel,`address`=:address,`email`=:email,`cep`=:cep WHERE `id`=:id";
        $stmt = $db->prepare($query);
        $stmt->bindValue(':id',$data->id);
        $stmt->bindValue(':name',$data->name);
        $stmt->bindValue(':tel',$data->tel);
        $stmt->bindValue(':address',$data->address);
        $stmt->bindValue(':email',$data->email);
        $stmt->bindValue(':cep',$data->cep);
        $stmt->execute();
        return $stmt->execute();
    }
    function del($data){
        $db = conn();
        $query = "DELETE * FROM `client` WHERE `id`=:id";
        $stmt = $db->prepare($query);
        $stmt->bindValue(':id',$data->id);
        $stmt->execute();
        return $stmt->execute();
    }
    function listAll(){
        $db = conn();
        $query = "SELECT * FROM `client` order by `id` DESC";
        $stmt = $db->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    function find($id){
        $db = conn();
        $query = "SELECT * FROM `client` where id=:id";
        $stmt = $db->prepare($query);
        $stmt->bindValue(':id',$id);
        $stmt->execute();
        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }
