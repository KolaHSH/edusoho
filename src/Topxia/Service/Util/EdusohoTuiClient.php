<?php

namespace Topxia\Service\Util;

use \RuntimeException;
use Biz\CloudPlatform\CloudAPIFactory;
use Topxia\Service\Common\BaseService;

class EdusohoTuiClient extends BaseService
{
    public function getToken()
    {
        $result = CloudAPIFactory::create('tui')->get('/token');
        return $result;
    }

    public function findMessagesByUserIdAndlastMaxId($userId, $lastMaxId)
    {
        $result = CloudAPIFactory::create('tui')->get(
            sprintf('/tui/message/%s/list', $userId),
            array('lastMaxId' => $lastMaxId, 'limit' => 20)
        );
        return $result;
    }

    public function addStudent($user)
    {
        $result = CloudAPIFactory::create('tui')->post('/tui/student/add', array(
            'id' => $user['id'],
            'username' => $user['nickname'],
            'email' => $user['email'],
            'name' => '',
            'mobile' => ''
        ));
        return $result;
    }

    public function sendMessage($message)
    {
        $result = CloudAPIFactory::create('tui')->post(
            sprintf('/tui/message/%s/friend/%s/send', $message['fromId'], $message['toId']),
            array(
                'type' => $message['type'],
                'title' => $message['title'],
                'content' => $message['content'],
                'custom' => $message['custom']
        ));
        return $result;
    }

    public function sendAnnouncement($announcement)
    {
        $result = CloudAPIFactory::create('tui')->post('/tui/message/bulletin/send',array(
            'esBulletinId' => $announcement['id'],
            'title' => $this->getKernel()->trans('网校公告'),
            'content' => $announcement['content']
        ));
        return $result;
    }

}