<?php

namespace Topxia\WebBundle\Extensions\DataTag\Test;

use Biz\BaseTestCase;;
use Topxia\WebBundle\Extensions\DataTag\HotGroupDataTag;

class HotGroupDataTagTest extends BaseTestCase
{   

    public function testGetData()
    {
        $datatag = new HotGroupDataTag();
        $datatag->getData(array('count' => 5));
    }

}